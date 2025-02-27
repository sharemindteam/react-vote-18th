import { useState, Dispatch, SetStateAction } from 'react';
import { InputStatus } from 'utils/type';

type UseInputResult = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  status: InputStatus;
  setStatus: Dispatch<SetStateAction<InputStatus>>;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: Dispatch<SetStateAction<boolean>>;
};
//input만 사용할 시 해당 커스텀훅 사용
export const useInput = (initialValue: string) => {
  const [value, setValue] = useState<string>(initialValue);
  const [status, setStatus] = useState<InputStatus>('default');
  //error 메세지
  const [message, setMessage] = useState<string>('');
  //해당 input이 유효한지 여부
  const [isValid, setIsValid] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
    status,
    setStatus,
    message,
    setMessage,
    isValid,
    setIsValid,
  } as UseInputResult;
};
