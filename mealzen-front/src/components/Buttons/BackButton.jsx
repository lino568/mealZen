import { Navigate, useNavigate } from "react-router-dom";

function BackButton({link}) {
    const navigate = useNavigate();

    const whereToGo = () => {
        navigate(link)
    };

    return <>
        <button className="back-button" onClick={whereToGo} title="Retour">
        ←
      </button>
    </>
}

export default BackButton;