import '../assets/footer.css'
export default {
    data(){
        return {
            author:'HannieJoe',
        };
    },
    render(){
        return (
            <div id="footer">
                <span> Writen by {this.author}</span>
            </div>
        );
    },
}