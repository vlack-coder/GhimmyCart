import MessageBox from "../components/message-box/message-box.component";
import Spinner from "../components/spinner/spinner.component";

const WithState = (WrappedComponent: any) => {
  const withState = ({
    isLoading,
    errorMessage,
    handleRetry,
    ...otherProps
  }: any) => {
    if (isLoading) return <Spinner isLarge />;

    if (errorMessage && !isLoading)
      return (
        <MessageBox message={errorMessage} handleButtonClick={handleRetry} />
      );

    return <WrappedComponent {...otherProps} />;
  };

  return withState;
};

export default WithState;
