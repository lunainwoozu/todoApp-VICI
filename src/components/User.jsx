import Profile from "./Profile"

const User = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[40vh] p-8">
      <Profile />
      <h2 className="mt-4">유저</h2>
      <p>user message</p>
    </div>
  )
}

export default User;