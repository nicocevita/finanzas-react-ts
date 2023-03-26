import React from "react";
import { Modal, Box, Typography, BoxProps } from "@material-ui/core";

declare module "@material-ui/core" {
  interface BoxProps {
    transform?: string;
  }
}

interface ICustomModal {
  open: boolean;
  handleClose: () => void;
  style?: BoxProps;
  title: string;
  children: JSX.Element;
}

const CustomModal = ({
  open,
  handleClose,
  style,
  title,
  children,
}: ICustomModal) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      style={{
        backdropFilter: open ? "blur(5px)" : "none", 
        backgroundColor: "rgba(0, 0, 0, 0.6)",
      }}
    >
      <Box sx={style}>
        <Typography style={{minWidth: 200}} id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        {children}
      </Box>
    </Modal>
  );
};

export default CustomModal;
