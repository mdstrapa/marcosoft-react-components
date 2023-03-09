interface MSFormattedMessageProps {
    message: string
    style: MessageStyle
}

export enum MessageStyle {
    INFO= 'info',
    WARNING = 'warning',
    SUCCESS = 'success',
    DANGER = 'danger'
}

const MSFormatteMessage:React.FC<MSFormattedMessageProps> = ({message,style}) => {
    
    let messageStyle = "";

    switch (style) {
        case MessageStyle.INFO:
            messageStyle = "alert alert-info";
            break
        case MessageStyle.WARNING:
            messageStyle = "alert alert-warning";
            break
        case MessageStyle.SUCCESS:
            messageStyle = "alert alert-success";
            break
        case MessageStyle.DANGER:
            messageStyle = "alert alert-danger";
            break
        default:
            messageStyle = ""
    }

/*    if (style == "info") {
        messageStyle = "alert alert-info";
    }else if (style == "warning") {
        messageStyle = "alert alert-warning";
    }else if (style == "success") {
        messageStyle = "alert alert-success";
    }else if (style == "danger") {
        messageStyle = "alert alert-danger";
    }*/

    return(
        <div className={messageStyle}>
            {message}
        </div>
    )
}
export default MSFormatteMessage;