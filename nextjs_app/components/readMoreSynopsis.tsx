export default function ReadMoreSynopsis(props: { paragraph: string; readMore: boolean; }) {
    const {paragraph, readMore} = props;

    const paragraphSplitByWord = paragraph.split(' ')

    const first10Words = paragraphSplitByWord.slice(0, 10)
    const turnBackToString = first10Words.join(' ')
    
    return (
        <p>
            {
                readMore ?
                paragraph :
                turnBackToString
            }
        </p>
    )
}