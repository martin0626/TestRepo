import { useState } from "react";
import MainForm from "../../components/mainForm";
import { formDataScheme , type formDataT, type formInputT } from "../../types/global";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUserHttp } from "../../http/userHttp";
import { useAuthToken } from "../../hooks/useAuthToken";



const inputs: formInputT[] = [
        { label: "Name", type: "text", name: "name" },
        { label: "Address", type: "text", name: "address" },
        { label: "City", type: "text", name: "city" },
    ];


export default function FormPage(){
    const token = useAuthToken();
    const queryCClient = useQueryClient();
    // const test = useSubmitUser(token);

    const {mutate, isPending, isError, error} = useMutation({
        mutationFn: ({token, data}: {token: string, data: formDataT}) => createUserHttp(token, data),
        onSuccess: () => {
            queryCClient.invalidateQueries({queryKey: ["users"]});
        }
    });
    const [validationErr, setValidationErr] = useState<string | null>(null);
    

    const actionHandler = (formData: FormData) => {

        const entries = Object.fromEntries(formData.entries());
        const validationResult = formDataScheme.safeParse(entries);
        
        if (validationResult.success) {
            mutate({token, data: validationResult.data});
        } else if (!validationResult.success) {
            setValidationErr(_=>{
                return validationResult.error.issues.map(issue => issue.message).join(" / ");
            });
        }
    }


    return (
        <section className="formPage">
            <header className="form-header">
                <h1 className="form-title">Create List Item</h1>
                <p className="form-err">{validationErr ? validationErr : ""}</p>
                {isError && <p className="form-err">{error instanceof Error ? error.message : "An error occurred"}</p>}
            </header>
            <MainForm actionHandler={actionHandler} isSubmitting={isPending} inputs={inputs}/>
        </section>
    )
}