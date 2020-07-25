import {useState, useEffect, useRef} from 'react';
import {ObjectSchema, Shape, ValidationError, setLocale} from 'yup';

interface Props<T extends Object> {
  schema: ObjectSchema<Shape<object | undefined, T>>;
  obj: T;
}

setLocale({
  mixed: {
    required: () => "general.helperText.field_is_required",
  },
  string: {
    min: ({min}) => `general.helperText.need_at_least_${min}_characters`,
  },
})

export const useValidator = <T>({schema, obj}: Props<T>) => {
  const timeout = useRef<any>();
  const [state, setState] = useState<ValidationError[]>([]);

  useEffect(() => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if(obj) {
        schema.validate(obj, {
          abortEarly: false
        })
        .then(valid => {
          setState([]);
        })
        .catch(err => {
          setState(err.inner)
        })
      }
    }, 300);
  }, [obj, schema]);
  
  return state;
}