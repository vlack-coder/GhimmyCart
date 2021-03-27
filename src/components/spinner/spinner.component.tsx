import "./spinner.styles.scss";

type Props = {
  isLarge: boolean;
};

const Spinner: React.FC<Props> = ({ isLarge }: Props) => (
  <div className={`spinner ${isLarge ? "large-spinner" : ""}`} />
);

export default Spinner;
