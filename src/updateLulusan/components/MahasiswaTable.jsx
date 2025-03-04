import React, { useState, useEffect } from 'react';
import { Button, Modal } from '@/commons/components';
import graduateMahasiswa from '../services/graduateMahasiswa';

const MahasiswaTable = ({ mahasiswaDataList = [] }) => {
  const [selectedIds, setSelectedIds] = useState([]);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter mahasiswaDataList berdasarkan query pencarian
  const filteredMahasiswaDataList = mahasiswaDataList.filter(mahasiswaItem =>
    mahasiswaItem.nama.toLowerCase().includes(searchQuery.toLowerCase()) ||
    mahasiswaItem.tahunAngkatan.toString().includes(searchQuery) ||
    mahasiswaItem.statusAkademik.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCheckboxChange = (id) => {
    setSelectedIds(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleGraduate = async () => {
    try {
      await graduateMahasiswa({ idMahasiswaList: selectedIds });
      setShowConfirmModal(false); // Tutup modal setelah lulus
      window.location.reload();
    } catch (error) {
      console.error("Failed to graduate selected students:", error);
    }
  };

  const confirmGraduate = () => {
    if (selectedIds.length > 0) {
      setShowConfirmModal(true);
    } else {
      alert("Please select at least one student.");
    }
  };

  const handleSelectAllChange = () => {
    if (filteredMahasiswaDataList.length === selectedIds.length) {
      setSelectedIds([]); // Hapus semua pilihan
    } else {
      setSelectedIds(filteredMahasiswaDataList.map(m => m.id)); // Pilih semua mahasiswa yang terfilter
    }
  };

  // Fungsi untuk memeriksa apakah mahasiswa sudah dipilih
  const isSelected = (id) => selectedIds.includes(id);

  if (!mahasiswaDataList || mahasiswaDataList.length === 0) {
    return <p>No data available</p>;
  }

  return (
    <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px" }}>
      <div style={{ marginBottom: "10px" }}>
        <input
          type="checkbox"
          checked={filteredMahasiswaDataList.length === selectedIds.length}
          onChange={handleSelectAllChange}
        /> Select All
      </div>

      {/* Input pencarian */}
      <div style={{ marginBottom: "15px" }}>
        <input
          type="text"
          placeholder="Search by nama, angkatan atau status akademik"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          style={{
            padding: "8px", width: "100%", marginBottom: "15px", borderRadius: "4px", border: "1px solid #ddd"
          }}
        />
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85em", marginBottom: "15px" }}>
        <thead>
          <tr>
            <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Nama</th>
            <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Angkatan</th>
            <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Status Akademik</th>
            <th style={{ padding: "8px", borderBottom: "1px solid #ddd", textAlign: "left" }}>Select</th>
          </tr>
        </thead>
        <tbody>
          {filteredMahasiswaDataList.map(mahasiswaItem => (
            <tr key={mahasiswaItem.id}>
              <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{mahasiswaItem.nama}</td>
              <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{mahasiswaItem.tahunAngkatan}</td>
              <td style={{ padding: "8px", textAlign: "left", borderBottom: "1px solid #ddd" }}>{mahasiswaItem.statusAkademik}</td>
              <td style={{ padding: "8px", textAlign: "center", borderBottom: "1px solid #ddd" }}>
                <input
                  type="checkbox"
                  checked={isSelected(mahasiswaItem.id)}
                  onChange={() => handleCheckboxChange(mahasiswaItem.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button onClick={confirmGraduate} variant="secondary" style={{ backgroundColor: "red", color: "white" }}>
          Graduate
        </Button>
      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <Modal
          isShow={showConfirmModal}
          title="Confirm Graduation"
          onClose={() => setShowConfirmModal(false)}
        >
          <Button onClick={() => setShowConfirmModal(false)}>Cancel</Button>
          <Button onClick={handleGraduate} variant="danger" style={{ marginLeft: "10px" }}>
            Confirm
          </Button>
        </Modal>
      )}
    </div>
  );
};

export default MahasiswaTable;
