import React from "react";
import PropTypes from "prop-types";
import { Spinner } from "@/commons/components";

const DetailContainerLayout = ({
  title,
  isLoading,
  items,
  children,
  isCorrelatedWithAnotherComponent,
}) => {
  return (
    <div
      className={`prose ${isCorrelatedWithAnotherComponent ? "w-full max-w-screen-xl" : "max-w-screen-lg"} mx-auto`}
    >
      {isLoading ? (
        <div className={"py-8 text-center"}>
          <Spinner />
        </div>
      ) : Object.keys(items).length ? (
        <>
          <div className="flex flex-row items-center justify-between m-2">
            <h2 className="my-7">{title}</h2>
          </div>
          {children}
        </>
      ) : (
        <div className="py-8 text-center">
          Tidak ada detail data untuk ditampilkan
        </div>
      )}
    </div>
  );
};

DetailContainerLayout.propTypes = {
  title: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  items: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  isCorrelatedWithAnotherComponent: PropTypes.bool,
};

export default DetailContainerLayout;
