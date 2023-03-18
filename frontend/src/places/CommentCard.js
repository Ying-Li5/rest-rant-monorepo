import { useContext } from "react";

function CommentCard({ comment, onDelete }) {
    const { currentUser } = useContext(CurrentUser)

    let deletebutton = null;

    if (currentUser?.userId === comment.authorId) {
        deletebutton = (
            <button className="btn btn danger" onClick={onDelete}>
                Delete Comment
            </button>
        )
    }
    return (
        <div className="border col-sm-4">
            <h2 className="rant">{comment.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
            <h4>{comment.content}</h4>
            <h3>
                <strong>- {comment.author.firstName} {comment.author.lastName}</strong>
            </h3>
            <h4>Rating: {comment.stars}</h4>
            <button className="btn btn-danger" onClick={onDelete} >
                Delete Comment
            </button>
            {deletebutton}
        </div>
    )
}

export default CommentCard;