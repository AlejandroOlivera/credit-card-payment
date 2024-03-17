import { Input } from '@mantine/core';

interface IWInput {
  type: React.HTMLInputTypeAttribute;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  width?: number | string;
  inputLabel?: string;
  errorMessage?: string;
}
export const WInput: React.FC<IWInput> = ({
  onChange,
  placeholder,
  type,
  value,
  width,
  inputLabel,
  errorMessage,
}) => (
  <Input.Wrapper label={inputLabel} error={errorMessage}>
    <Input
      width={width}
      value={value}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  </Input.Wrapper>
);
