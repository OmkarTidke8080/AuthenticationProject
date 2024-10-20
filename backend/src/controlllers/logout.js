

// Sign Out - clears cookies (access and refresh tokens)
export const logout = async (req,res) =>{
  res.clearCookie("accessToken");
  res.clearCookie("refreshToken");

  res.status(200).json({
    msg:"Sign Out Successful"
  })
}

export default logout