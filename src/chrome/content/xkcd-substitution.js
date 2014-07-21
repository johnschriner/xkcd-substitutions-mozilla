// This was all not my code, I just edited the word replacement part
// mozilla folks rejected it because performance issues, but were nice
// and gave me replacement code to make it faster
function xkcdMunge(doc) {
    var substitutions = {
        "Witnesses": "These dudes I know",
        "witnesses": "these dudes I know",
        "WITNESSES": "THESE DUDE I KNOW",
        "Allegedly": "Kinda probably",
        "allegedly": "kinda probably",
        "ALLEGEDLY": "KINDA PROBABLY",
        "New Study": "Tumblr Post",
        "new Study": "Tumblr Post",
        "New study": "Tumblr post",
        "NEW STUDY": "TUMBLR POST",
        "new study": "Tumblr post",
        "Rebuild": "Avenge",
        "rebuild": "avenge",
        "REBUILD": "AVENGE",
        "Space": "Spaaace",
        "space": "spaaace",
        "SPACE": "SPAACE",
        "Google Glass": "Virtual Boy",
        "Google glass": "Virtual boy",
        "google Glass": "virtual Boy",
        "google glass": "virtual boy",
        "GOOGLE GLASS": "VIRTUAL BOY",
        "Smartphone": "Pokédex",
        "smartphone": "pokédex",
        "SMARTPHONE": "POKÉDEX",
        "Electric": "Atomic",
        "electric": "atomic",
        "ELECTRIC": "ATOMIC",
        "Senator": "Elf-lord",
        "senator": "elf-lord",
        "SENATOR": "ELF-LORD",
        "Car": "Cat",
        "car": "cat",
        "CAT": "CAT",
        "Election": "Eating contest",
        "election": "eating contest",
        "ELECTION": "EATING CONTEST",
        "Congressional Leaders": "River Spirits",
        "Congressional leaders": "River spirits",
        "congressional Leaders": "river Spirits",
        "congressional leaders": "river spirits",
        "CONGRESSIONAL LEADERS": "RIVER SPIRITS",
        "Homeland Security": "Homestar Runner",
        "Homeland security": "Homestar runner",
        "homeland Security": "homestar Runner",
        "homeland security": "homestar runner",
        "HOMELAND SECURITY": "HOMESTAR RUNNER",
        "Could not be reached for comment": "Is guilty and everyone knows it",
        "could not be reached for comment": "is guilty and everyone knows it",
    };

    var xpath = "//text()[" + Object.keys(substitutions)
                                    .map(s => 'contains(., "' + s + '")')
                                    .join(" or ") + "]";

    var pattern = RegExp("\\b(" + Object.keys(substitutions)
                                        .join("|") + ")\\b", "g");


    for (let node in findXPath(xpath, doc.body || doc.documentElement))
        node.textContent = node.textContent.replace(pattern, (m0, m1) => substitutions[m1]);

    function findXPath(expression, elem) {
        let doc = elem.ownerDocument || elem;

        let resolver = n => null;
        let iterator = doc.evaluate(expression, elem, resolver,
                                    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
                                    null);

        for (let i = 0; i < iterator.snapshotLength; i++)
            yield iterator.snapshotItem(i);
    }
}
