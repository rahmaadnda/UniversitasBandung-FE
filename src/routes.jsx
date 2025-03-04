import { useRoutes } from "react-router";
import { commonRoutes, commonMobileRoutes } from "@/commons/routes";
import userRoutes from "@/user/routes";
import roleRoutes from "@/role/routes";
import staticPageRoutes from "@/staticPage/routes";
import homeRoutes from "@/home/routes";
import profileAlumniRoutes from "@/profileAlumni/routes";
import buatAkunAlumniRoutes from "@/buatAkunAlumni/routes";
import kelasRoutes from "@/kelas/routes";
import pengumumanAlumniRoutes from "@/pengumumanAlumni/routes";
import pengumumanIndustriRoutes from "@/pengumumanIndustri/routes";
import pengumumanAdminAkademikRoutes from "@/pengumumanAdminAkademik/routes";
import profileMahasiswaRoutes from "@/profileMahasiswa/routes";
import approvalSubscriptionRoutes from "@/approvalSubscription/routes";
import cPLRoutes from "@/cPL/routes";
import laporanCPLRoutes from "@/laporanCPL/routes";
import programStudiRoutes from "@/programStudi/routes";
import daftarSemuaAlumniRoutes from "@/daftarSemuaAlumni/routes";
import daftarSemuaMahasiswaRoutes from "@/daftarSemuaMahasiswa/routes";
import daftarAlumniRoutes from "@/daftarAlumni/routes";
import daftarMahasiswaRoutes from "@/daftarMahasiswa/routes";
import daftarIndustriRoutes from "@/daftarIndustri/routes";
import mataKuliahRoutes from "@/mataKuliah/routes";
import kurikulumRoutes from "@/kurikulum/routes";
import lihatIRSRoutes from "@/lihatIRS/routes";
import isiUbahIRSRoutes from "@/isiUbahIRS/routes";
import pengaturanPengisianIRSRoutes from "@/pengaturanPengisianIRS/routes";
import pengajuanSubscriptionRoutes from "@/pengajuanSubscription/routes";
import verifikasiAlumniRoutes from "@/verifikasiAlumni/routes";
import verifikasiMahasiswaRoutes from "@/verifikasiMahasiswa/routes";
import pembayaranRoutes from "@/pembayaran/routes";
import updateLulusanRoutes from "@/updateLulusan/routes";
import cPMKRoutes from "@/cPMK/routes";
import subCPMKRoutes from "@/subCPMK/routes";
import laporanCPMKRoutes from "@/laporanCPMK/routes";
import penilaianKelasRoutes from "@/penilaianKelas/routes";
import ringkasanAkademisRoutes from "@/ringkasanAkademis/routes";
import riwayatAkademisRoutes from "@/riwayatAkademis/routes";
import semesterRoutes from "@/semester/routes";
import profileIndustriRoutes from "@/profileIndustri/routes";

const GlobalRoutes = () => {
  const router = useRoutes([
	...commonRoutes,
	...staticPageRoutes,
	...userRoutes,
	...roleRoutes,
	...homeRoutes, 
	...profileAlumniRoutes, 
	...buatAkunAlumniRoutes, 
	...kelasRoutes, 
	...pengumumanAlumniRoutes, 
	...pengumumanIndustriRoutes, 
	...pengumumanAdminAkademikRoutes, 
	...profileMahasiswaRoutes, 
	...approvalSubscriptionRoutes, 
	...cPLRoutes, 
	...laporanCPLRoutes, 
	...programStudiRoutes, 
	...daftarSemuaAlumniRoutes, 
	...daftarSemuaMahasiswaRoutes, 
	...daftarAlumniRoutes, 
	...daftarMahasiswaRoutes, 
	...daftarIndustriRoutes, 
	...mataKuliahRoutes, 
	...kurikulumRoutes, 
	...lihatIRSRoutes, 
	...isiUbahIRSRoutes, 
	...pengaturanPengisianIRSRoutes, 
	...pengajuanSubscriptionRoutes, 
	...verifikasiAlumniRoutes, 
	...verifikasiMahasiswaRoutes, 
	...pembayaranRoutes, 
	...updateLulusanRoutes, 
	...cPMKRoutes, 
	...subCPMKRoutes, 
	...laporanCPMKRoutes, 
	...penilaianKelasRoutes, 
	...ringkasanAkademisRoutes, 
	...riwayatAkademisRoutes, 
	...semesterRoutes, 
	...profileIndustriRoutes, 
  ])
  return router
}

const MobileRoutes = () => {
	const router = useRoutes([ 
	  ...commonMobileRoutes, 
  ])
  return router
}

export {GlobalRoutes, MobileRoutes}
