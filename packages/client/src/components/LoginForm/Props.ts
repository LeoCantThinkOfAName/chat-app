import { Dispatch, SetStateAction } from 'react';
import { ValidationError } from 'yup';

export interface FieldProps {
	inputs: { email: string; password: string };
	setter: Dispatch<SetStateAction<{ email: string; password: string }>>;
	validate: ValidationError[];
	type: 'login' | 'signup';
}

export interface InputProp {
	email: string;
	password: string;
}

export interface LoginFormProps {
	type: 'login' | 'signup';
}
