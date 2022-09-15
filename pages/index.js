import Comment from "../components/Comment";
import PostOwner from "../components/PostOwner";
import Reply from "../components/Reply";
import { comments } from "../libs/comments";

export default function Home() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto bg-white p-3 rounded rounded-3 shadow-sm"
      >
        {/* PostOwner Example*/}
        <PostOwner
          img={"/profileImages/img.jpg"}
          name={"Panyapat Wongdee 640610650"}
          status={"Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207"}
          like={261}
        />

        {/* Comment Example */}
        {comments.map((x) => (
          <Comment
            img={x.userImagePath}
            name={x.username}
            status={x.commentText}
            like={x.likeNum}
            reply={x.replies}
          />
        ))}

        {/* Reply Example */}
      </div>
    </div>
  );
}
