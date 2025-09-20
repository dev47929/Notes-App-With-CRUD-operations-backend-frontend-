const Background = ({ children }) => {
  return (
    <div className="bg-black min-h-screen w-full absolute">
      {children}
    </div>
  )
}

export default Background;