interface FormattedMessageProps {
    message: string
    style: string
}

const FormatteMessage:React.FC<FormattedMessageProps> = ({message,style}) => {
    
    let messageStyle = "";
    if (style == "info") {
        messageStyle = "alert alert-info";
    }else if (style == "warning") {
        messageStyle = "alert alert-warning";
    }else if (style == "success") {
        messageStyle = "alert alert-success";
    }else if (style == "danger") {
        messageStyle = "alert alert-danger";
    }

    return(
        <div className={messageStyle}>
            {message}
        </div>
    )
}
export default FormatteMessage;