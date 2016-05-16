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
        v = v.replace(/cloud/g, "butt");
        v = v.replace(/Cloud/g, "Butt");
        v = v.replace(/clouds/g, "butts");
        v = v.replace(/Clouds/g, "Butts");
    	v = v.replace(/\bthe\switnesses\b/g, "these dudes I know");
        v = v.replace(/\bThe\sWitnesses\b/g, "These dudes I know");
    	v = v.replace(/\bthe\sWitnesses\b/g, "these dudes I know");
        v = v.replace(/\bThe\switnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitnesses\b/g, "these dudes I know");
        v = v.replace(/\bWitnesses\b/g, "These dudes I know");
        v = v.replace(/\bwitness\b/g, "this dude I know");
        v = v.replace(/\bWitness\b/g, "This dude I know");
        v = v.replace(/\ballegedly\b/g, "kinda probably");
        v = v.replace(/\bAllegedly\b/g, "Kinda probably");
        v = v.replace(/\bnew\sstudies\b/g, "Tumblr posts");
        v = v.replace(/\bNew\sstudies\b/g, "Tumblr posts");
        v = v.replace(/\bnew\sStudies\b/g, "Tumblr Posts");
        v = v.replace(/\bNew\sStudies\b/g, "Tumblr Posts");
        v = v.replace(/\bnew\sstudy\b/g, "Tumblr post");
        v = v.replace(/\bNew\sstudy\b/g, "Tumblr post");
        v = v.replace(/\bnew\sStudy\b/g, "Tumblr Post");
        v = v.replace(/\bNew\sStudy\b/g, "Tumblr Post");
        v = v.replace(/\brebuild\b/g, "avenge");
        v = v.replace(/\bRebuild\b/g, "Avenge");
        v = v.replace(/\bspace\b/g, "spaaace");
        v = v.replace(/\bSpace\b/g, "Spaaace");
        v = v.replace(/\bGoogle\sGlass\b/g, "Virtual Boy");
        v = v.replace(/\bgoogle\sglass\b/g, "virtual boy");
        v = v.replace(/\bgoogle\sGlass\b/g, "virtual boy");
        v = v.replace(/\bGoogle\sglass\b/g, "Virtual Boy");
        v = v.replace(/\bsmartphones\b/g, "pokédexes");
        v = v.replace(/\bSmartphones\b/g, "Pokédexes");
        v = v.replace(/\bsmartphone\b/g, "pokédex");
        v = v.replace(/\bSmartphone\b/g, "Pokédex");
        v = v.replace(/\belectric\b/g, "atomic");
        v = v.replace(/\bElectric\b/g, "Atomic");
        v = v.replace(/\bsenators\b/g, "elf-lords");
        v = v.replace(/\bSenators\b/g, "Elf-lords");
        v = v.replace(/\bsenator\b/g, "elf-lord");
        v = v.replace(/\bSenator\b/g, "Elf-lord");
        v = v.replace(/\bcars\b/g, "cats");
        v = v.replace(/\bCars\b/g, "Cats");
        v = v.replace(/\bcar\b/g, "cat");
        v = v.replace(/\bCar\b/g, "Cat");
        v = v.replace(/\belections\b/g, "eating contests");
        v = v.replace(/\bElections\b/g, "Eating Contests");
        v = v.replace(/\belection\b/g, "eating contest");
        v = v.replace(/\bElection\b/g, "Eating Contest");
        v = v.replace(/\bcongressional\sleaders\b/g, "river spirits");
        v = v.replace(/\bCongressional\sleaders\b/g, "River spirits");
        v = v.replace(/\bcongressional\sLeaders\b/g, "river spirits");
        v = v.replace(/\bCongressional\sLeaders\b/g, "River Spirits");
        v = v.replace(/\bcongressional\sleader\b/g, "river spirit");
        v = v.replace(/\bCongressional\sleader\b/g, "River spirit");
        v = v.replace(/\bcongressional\sLeader\b/g, "river spirit");
        v = v.replace(/\bCongressional\sLeader\b/g, "River Spirit");
        v = v.replace(/\bHomeland\ssecurity\b/g, "Homestar runner");
        v = v.replace(/\bHomeland\sSecurity\b/g, "Homestar Runner");
        v = v.replace(/\bhomeland\ssecurity\b/g, "homestar runner");
        v = v.replace(/\bhomeland\sSecurity\b/g, "homestar Runner");
        v = v.replace(/\bcould\snot\sbe\sreached\sfor\scomment\b/gi, "is guilty and everyone knows it");
        v = v.replace(/\bgaffe\b/g, "gaffe");
        v = v.replace(/\bGaffe\b/g, "Gaffe");
        v = v.replace(/\bancient\b/g, "haunted");
        v = v.replace(/\bAncient\b/g, "Haunted");
        v = v.replace(/\bstar\-studded\b/g, "blood-soaked");
        v = v.replace(/\bStar\-studded\b/g, "Blood-soaked");
        v = v.replace(/\bremains\sto\sbe\sseen\b/g, "will never be known");
        v = v.replace(/\bsilver\sbullet\b/g, "way to kill werewolves");
        v = v.replace(/\bsubway\ssystem\b/g, "tunnels I found");
        v = v.replace(/\bsurprising\b/g, "surprising (but not to me");
        v = v.replace(/\bwar\sof\swords\b/g, "interplanetary war");
        v = v.replace(/\btension\b/g, "sexual tension");
        v = v.replace(/\bsurprising\b/g, "surprising (but not to me");
        v = v.replace(/\bsurprising\b/g, "surprising (but not to me");
        v = v.replace(/\bsurprising\b/g, "surprising (but not to me");
        v = v.replace(/\bsurprising\b/g, "surprising (but not to me");
        
        
        textNode.nodeValue = v;
    }

    function windowLoadHandler()
    {
        // Dear Mozilla: I hate you for making me do this.
        window.removeEventListener('load', windowLoadHandler);

        document.getElementById('appcontent').addEventListener('DOMContentLoaded', function(e) {
            walk(e.originalTarget.body);
        });
    }

    window.addEventListener('load', windowLoadHandler);
}());
