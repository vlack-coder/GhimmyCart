import "./message-box.styles.scss";
import CustomButton from "../custom-button/custom-button.component";

type Props = {
  message: string;
  buttonText?: string;
  handleButtonClick: () => void;
  children?: React.ReactNode;
};

const MessageBox: React.FC<Props> = ({
  message,
  handleButtonClick,
  buttonText,
  children,
}: Props) => {
  return (
    <div className="message-box">
      {children}

      <p className="message-box__message">{message}</p>

      {handleButtonClick && (
        <CustomButton onClick={handleButtonClick}>
          {buttonText || "Try Again"}
        </CustomButton>
      )}
    </div>
  );
};

export default MessageBox;
