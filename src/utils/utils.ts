import nlp from "compromise";

export const extractNouns = (str: string): string[] => {
    const stopWords = [
        "a", "an", "the", 
        "and", "but", "in", "on", "at", "of", "with", "to", "for", "yet", "nor", "so", "by", "from", "as", "over", "another", "other"];
    const strWithOutStopWords = str.toLowerCase().split(' ').filter(word => word && !stopWords.includes(word)).join(' ');
    const nouns = nlp(strWithOutStopWords).nouns().toSingular().out('array');
    const oneWordedNouns = new Set<string>(nouns.join(' ').split(' '));
    return [...oneWordedNouns].slice(0, 3);
};

export const transformDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "2-digit"
    });
}
