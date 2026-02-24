import GoogleOutlined from "@ant-design/icons/lib/icons/GoogleOutlined";
import MainForm from "../../components/mainForm";
import type { formInputT } from "../../types/global";

export default function AuthPage() {

    const inputs: formInputT[] = [
        { label: "First Name", type: "text", name: "firstName" },
        { label: "Last Name", type: "text", name: "lastName" },
        { label: "Email", type: "email", name: "email" },
    ];

    const actionHandler = (formData: FormData) => {
        console.log("Form Data Submitted: ", formData.get("firstName"), formData.get("lastName"), formData.get("email"));
    }

    return (
        <section className="authPage">
                <h1>Auth Page</h1>
                <article className="authPage-formContainer">
                    <div className="authPage-formWrapper">
                        <a href="http://localhost:3000/auth/google" className="authPage-formWrapper-icon"><GoogleOutlined /></a>
                        <MainForm inputs={inputs} actionHandler={actionHandler}/>
                    </div>
                </article>
        </section>
    )
}