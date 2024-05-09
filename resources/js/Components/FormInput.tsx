import React from "react";

interface FormInputProps {
    id: string;
    label: string;
    type?: string;
    value: string;
    onChange: (value: string) => void;
    error?: string;
    placeholder: string
}

const FormInput: React.FC<FormInputProps> = ({
                                                 id,
                                                 label,
                                                 type = "text",
                                                 value,
                                                 onChange,
                                                 error,
                                                 placeholder
                                             }) => {
    return (
        <div className="mb-4">
            <label htmlFor={id} className="block text-gray-700">
                {label}
            </label>
            <input required
                type={type}
                id={id}
                className="mt-1 p-2 w-full border rounded-md"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {error && <p className="text-red-500 text-xs">{error}</p>}
        </div>
    );
};

export default FormInput;
