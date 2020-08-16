import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { ObjectSchema, Shape, ValidationError, setLocale } from 'yup';

interface Props<T extends Object> {
	schema: ObjectSchema<Shape<object | undefined, T>>;
	obj: T;
}

setLocale({
	mixed: {
		required: () => 'general.helperText.field_is_required',
	},
	string: {
		min: ({ min }) => `general.helperText.need_at_least_${min}_characters`,
		email: () => 'general.helperText.use_valid_email_format',
	},
});

export const useValidator = <T>(): [ValidationError[], Dispatch<SetStateAction<Props<T> | null>>] => {
	const [ validate, setValidate ] = useState<ValidationError[]>([]);
	const [ config, setConfig ] = useState<Props<T> | null>(null);

	useEffect(
		() => {
			if (config) {
				const { schema, obj } = config;
				schema
					.validate(obj, {
						abortEarly: false,
					})
					.then((valid) => {
						setValidate([]);
					})
					.catch((err) => {
						setValidate(err.inner);
					});
			}
		},
		[ config ]
	);

	return [ validate, setConfig ];
};
