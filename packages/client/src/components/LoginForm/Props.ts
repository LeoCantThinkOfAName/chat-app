import {Dispatch, SetStateAction} from 'react';
import { ValidationError } from 'yup';

export interface FieldProps {
	inputs: { name: string; password: string };
	setter: Dispatch<SetStateAction<{ name: string; password: string }>>;
	validate: ValidationError[];
	type: 'login' | 'signup';
}

export interface InputProp {
	name: string;
	password: string;
}

export interface LoginFormProps {
	type: 'login' | 'signup';
}