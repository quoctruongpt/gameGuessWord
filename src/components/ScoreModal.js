import React, { memo } from "react";
import { Modal, Button } from "react-bootstrap";

function ScoreModal({score, show, onClose}) {
  return (
    <div>
      {/* Modal thông báo điểm */}
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>Bạn thắng</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, bạn đã xuất sắc đạt được: {score} điểm</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={onClose}>
            Chơi lại
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default memo(ScoreModal)
