interface MSFormattedMessageProps {
    message: string
    style: string
}

const MSFormatteMessage:React.FC<MSFormattedMessageProps> = ({message,style}) => {
    
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
export default MSFormatteMessage;