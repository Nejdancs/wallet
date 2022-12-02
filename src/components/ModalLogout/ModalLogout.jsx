import {
  ModalContainer,
  CloseBtn,
  CloseIcon,
  Text,
  BtnContainer,
  ConfirmBtn,
  CancelBtn,
  Overlay,
  Modal,
} from './ModalLogout.styled';
import close from 'images/close.svg';

const ModalLogout = () => {
  return (
    <Overlay onClick={() => {}}>
      <Modal>
        <ModalContainer>
          <CloseBtn type="button" onClick={() => {}}>
            <CloseIcon src={close} />
          </CloseBtn>
          <Text> Ви впевнені, що хочете вийти?</Text>
          <BtnContainer>
            <ConfirmBtn type="button" onClick={() => {}}>
              Так
            </ConfirmBtn>
            <CancelBtn type="button" onClick={() => {}}>
              Ні
            </CancelBtn>
          </BtnContainer>
        </ModalContainer>
      </Modal>
    </Overlay>
  );
};
export default ModalLogout;
