
const Search = () => {
   
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    return (  
        <div className="search-containter">
            <form onSubmit={handleSubmit}>
            <input type="search"  placeholder="Search"/>
            <button></button>
            </form>
        </div>
    );
}
 
export default Search;