const UserProfile =({params}: any)=>{
    return (
        <div className="flex flex-col gap-3">
            <h1>Profile page</h1>
            <h3 className='text-4xl'>
              welcome  {params.id}
            </h3>
        </div>
    )
}


export default UserProfile