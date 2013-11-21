// This was all not my code, I just edited the word replacement part
(function() {

    function walk(node) 
    {
        // I stole this function from here:
        // http://is.gd/mwZp7E
    
        var child, next;
    
        switch ( node.nodeType )  
        {
            case 1:  // Element
            case 9:  // Document
            case 11: // Document fragment
                child = node.firstChild;
                while ( child ) 
                {
                    next = child.nextSibling;
                    walk(child);
                    child = next;
                }
                break;
    
            case 3: // Text node
                handleText(node);
                break;
        }
    }
    
    function handleText(textNode)
    {
        var v = textNode.nodeValue;
        // This is the part I edited
    
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bWITNESSES\b/g, "THESE DUDE I KNOW");
        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bALLEGEDLY\b/g, "KINDA PROBABLY");
        v = v.replace(/\bNew Study\b/g, "Tumblr Post");
        v = v.replace(/\bnew Study\b/g, "Tumblr Post");
        v = v.replace(/\bNew study\b/g, "Tumblr post");
        v = v.replace(/\bNEW STUDY\b/g, "TUMBLR POST");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bREBUILD\b/g, "AVENGE");
        v = v.replace(/\bSpace\b/g, "Spaaace");
        v = v.replace(/\bspace\b/g, "spaaace");
        v = v.replace(/\bSPACE\b/g, "SPAACE");
        v = v.replace(/\bGoogle Glass\b/g, "Virtual Boy");
        v = v.replace(/\bGoogle glass\b/g, "Virtual boy");
        v = v.replace(/\bgoogle Glass\b/g, "virtual Boy");
        v = v.replace(/\bgoogle glass\b/g, "virtual boy");
        v = v.replace(/\bGOOGLE GLASS\b/g, "VIRTUAL BOY");
        v = v.replace(/\bSmartphone\b/g, "Pokédex");
        v = v.replace(/\bsmartphone\b/g, "pokédex");
        v = v.replace(/\bSMARTPHONE\b/g, "POKÉDEX");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bELECTRIC\b/g, "ATOMIC");
        v = v.replace(/\bSenator\b/g, "Elf-lord");
        v = v.replace(/\bsenator\b/g, "elf-lord");
        v = v.replace(/\bSENATOR\b/g, "ELF-LORD");
        v = v.replace(/\bCar\b/g, "Cat");
        v = v.replace(/\bcar\b/g, "cat");
        v = v.replace(/\bCAT\b/g, "CAT");
        v = v.replace(/\bElection\b/g, "Eating contest");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bELECTION\b/g, "EATING CONTEST");
        v = v.replace(/\bCongressional Leaders\b/g, "River Spirits");
        v = v.replace(/\bCongressional leaders\b/g, "River spirits");
        v = v.replace(/\bcongressional Leaders\b/g, "river Spirits");
        v = v.replace(/\bcongressional leaders\b/g, "river spirits");
        v = v.replace(/\bCONGRESSIONAL LEADERS\b/g, "RIVER SPIRITS");
        v = v.replace(/\bHomeland Security\b/g, "Homestar Runner");
        v = v.replace(/\bHomeland security\b/g, "Homestar runner");
        v = v.replace(/\bhomeland Security\b/g, "homestar Runner");
        v = v.replace(/\bhomeland security\b/g, "homestar runner");
        v = v.replace(/\bHOMELAND SECURITY\b/g, "HOMESTAR RUNNER");
        v = v.replace(/\bCould not be reached for comment\b/g, "Is guilty and everyone knows it");
        v = v.replace(/\bcould not be reached for comment\b/g, "is guilty and everyone knows it");
        // End of my editions
    
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
    
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
