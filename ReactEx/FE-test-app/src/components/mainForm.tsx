import type { formInputT } from "../types/global";



type mainFormPropT = {
    styleClass?: string;
    actionHandler: (formElement: FormData) => void;
    isSubmitting?: boolean;
    inputs: formInputT[];
}


export default function MainForm({ styleClass="mainForm", actionHandler, isSubmitting, inputs }: mainFormPropT){
    return (
        <form action={actionHandler} className={styleClass}>
            {inputs.map((input) => (
                <div key={input.name} className="mainForm-inputEl">
                    <label htmlFor={input.name}>{input.label}</label>
                    <input type={input.type} name={input.name} />
                </div>
            ))}

            <button style={{marginTop: "2rem"}} disabled={isSubmitting} type="submit">{isSubmitting ? "Submitting..." : "Submit"}</button>
        </form>
    )
}