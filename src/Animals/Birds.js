import parrot from '../img/icons/001-parrots.svg';
import vulture from '../img/icons/002-vulture.svg';
import hawk from '../img/icons/014-hawk.svg';
import penguin from '../img/icons/037-penguin.svg';
import albatross from '../img/icons/007-albatross.svg';
import flamingo from '../img/icons/019-flamingo.svg';
import pigeon from '../img/icons/012-pigeon.svg';
import swan from '../img/icons/031-swan.svg';
import goose from '../img/icons/018-goose.svg';
import humming from '../img/icons/034-hummingbird.svg';
import swift from '../img/icons/009-swift.svg';
import pelican from '../img/icons/021-pelican.svg';
import heron from '../img/icons/005-heron.svg';
import toucan from '../img/icons/006-toucan.svg';
import passerine from '../img/icons/038-passerines.svg';
import City from '../img/icons/city.svg';
import Wood from '../img/icons/wood.svg';
import Water from '../img/icons/water.svg';


const Birds = {
    "Parrot": {
        name: "Parrot",
        image: "black",
        svg: parrot,
        info: 
        "Parrots are intelligent birds. They have relatively large brains, they can learn, and they can use simple tools. Because some species have the ability to make sounds like human voices and have plumages with bright colors, many species are kept as pets. "
    },
    "Vulture": {
        name: "Vulture",
        image: "purple",
        svg: vulture,
        info: 
        "Vultures are large birds of prey that usually feed on carrion (dead or dying animals and rocks). Vultures use their large wings to soar in the air for many miles without having to flap. Vultures are also called buzzards.",
        connection: {
            "Hawk": { detail: "They both belong to the family Accipitridae."}
        }
    },
    "Hawk": {
        name: "Hawk",
        image: "green",
        svg: hawk, 
        info: 
        "A hawk is a common term for a medium to large-sized birds of prey. Its usage varies in different places.",
        connection: {
            "Vulture": { detail: "They both belong to the family Accipitridae."}
        }  
    },
    "Penguin": {
        name: "Penguin",
        image: "gray",
        svg: penguin,
        info:
        "Penguins are seabirds in the family Spheniscidae. They use their wings to travel underwater, but they cannot travel in the air. They eat fish and other seafood. Penguins lay their eggs and raise their babies on land.",
        connection: {
            "Albatross": { detail: "The two large seabirds are close relatives." }
        }
    },
    "Albatross": {
        name: "Albatross",
        image: "orannge",
        svg: albatross,
        info: 
        "Albatrosses are large seabirds which belong to the biological family Diomedeidae. They live in the region of the Southern Ocean and the North Pacific Ocean. They are not found in the North Atlantic region, but their fossils have been found there, which shows that they used to live there.",
        connection: {
            "Penguin": { detail: "The two large seabirds are close relatives." }
        }
    },
    "Flamingo": {
        name: "Flamingo",
        image: "pink",
        svg: flamingo,
        info:
        "Flamingos are types of birds. They are noisy birds and they live in big groups called flocks. Flamingos are wading birds. This means they live by water, such as lakes.",
        connection: {
            "Pigeon": { detail: "Flamingos and Pigeons are distant relatives." },
            "Swan": { detail: "Flamingos and Swans are distant relatives." },
            "Goose": { detail: "Flamingos and Geese are distant relatives."}
        }
    },
    "Pigeon": {
        name: "Pigeon",
        image: "darkgray",
        svg: pigeon,
        info:
        `Pigeons or doves are the bird family Columbidae. The common names pigeon and dove are often used interchangeably. In ornithology, "dove" tends to be used for smaller species and "pigeon" for larger ones.`,
        connection: {
            "Flamingo": { detail: "Flamingos and Pigeons are distant relatives." },
        }
    },
    "Swan": {
        name: "Swan",
        image: "yellow",
        svg: swan,
        info:
        "A swan (Cygnini) is a kind of water bird, from the genera Cygnus and Coscoroba. They are in the subfamily Anserinae, in the family Anatidae, which also includes geese and ducks.",
        connection: {
            "Goose": { detail: "Both water birds belong to the family Anatidae." },
            "Flamingo": { detail: "Flamingos and Swans are distant relatives." },
        }
    },
    "Goose": {
        name: "Goose",
        image: "honeydew",
        svg: goose,
        info:
        `A goose (plural geese) is a bird of any of several waterfowl species in the family Anatidae. A male goose is called a "gander" and a baby goose is called a "gosling". A group of geese is called a "gaggle".`,
        connection: {
            "Swan": { detail: "Both water birds belong to the family Anatidae." },
            "Flamingo": { detail: "Flamingos and Geese are distant relatives."}
        }
    },
    "Hummingbird": {
        name: "Hummingbird",
        image: "purple",
        svg: humming,
        info:
        "Hummingbirds are birds native to the Americas and constituting the biological family Trochilidae. They are the smallest of birds, most species measuring 7.5–13 cm (3–5 in) in length.",
        connection: {
            "Swift": { detail: `They both belong to the family Apodiformes meaning "unfooted birds."` }
        }
    },
    "Swift": {
        name: "Swift",
        image: "black",
        svg: swift,
        info:
        "The swifts are a family, Apodidae, of highly aerial birds. They are superficially similar to swallows, but are not closely related to any passerine species. Swifts are placed in the order Apodiformes with hummingbirds.",
        connection: {
            "Hummingbird": { detail: `They both belong to the family Apodiformes meaning "unfooted birds."` }
        }
    },
    "Pelican": {
        name: "Pelican",
        image: "brown",
        svg: pelican,
        info:
        "Pelicans are a genus of large water birds that make up the family Pelecanidae. They are characterised by a long beak and a large throat pouch used for catching prey and draining water from the scooped-up contents before swallowing.",
        connection: {
            "Heron": { detail: "They both belong to the order Pelecaniformes."}
        }
    },
    "Heron": {
        name: "Heron",
        image: "yellow",
        svg: heron,
        info:
        "The herons are long-legged freshwater and coastal birds in the family Ardeidae, with 64 recognised species, some of which are referred to as egrets or bitterns rather than herons.",
        connection: {
            "Pelican": { detail: "They both belong to the order Pelecaniformes."}
        }
    },
    "Toucan": {
        name: "Toucan",
        image: "lightgreen",
        svg: toucan,
        info:
        "Toucans are arboreal and typically lay 2–21 white eggs in their nests. They are brightly marked and have large, often-colorful bills. The family includes five genera and over forty different species.",
        connection: {
            "Passerine": { detail: "Toucans belong to the neotropical near passerine bird family Ramphastidae."}
        }
    },
    "Passerine": {
        name: "Passerine",
        image: "brown",
        svg: passerine,
        info:
        `A passerine is any bird of the order Passeriformes, which includes more than half of all bird species. Sometimes known as perching birds or songbirds, passerines are distinguished from other orders of birds by the arrangement of their toes (three pointing forward and one back), which facilitates perching.`,
        connection: {
            "Toucan": { detail: "Toucans belong to the neotropical near passerine bird family Ramphastidae."}
        }
    },
    "Cities": {
        name: "Cities",
        image: "black",
        svg: City,
        connection: {
            "Pigeon": { detail: "Pigeons typically live in cities." },
            "Goose": { detail: "Geese can live in cities near bodies of water."},
            "Swan": { detail: "Swans can live in cities near bodies of water."},
            "Hummingbird": { detail: "Hummingbirds can live virtually anywhere"},
            "Hawk": { detail: "Hawks can thrive hunting small game in cities."},
            "Passerine": { detail: "Many species of Passerine birds live in or near cities." },
            "Parrot": { detail: "Due to human interaction its known that parrots can survive in cities." }
        }
    },
    "Woodlands": {
        name: "Woodlands",
        image: "green",
        svg: Wood,
        connection: {
            "Pigeon": { detail: "Pigeons can survive in the woodlands."},
            "Hummingbird": { detail: "Hummingbirds typically live in the woodlands."},
            "Hawk": { detail: "Many hawks hunt and live in the woodlands."},
            "Passerine": { detail: "Many species of passerine birds can live in the woodlands."},
            "Swift": { detail: "Swift roost and hunt in the woodlands."},
            "Toucan": { detail: "Toucans typically live in the rainforest."},
            "Parrot": {detail: "In the wild parrots live in the rainforest."}
        }
    },
    "Water": {
        name: "Water",
        image: "lightblue",
        svg: Water,
        connection: {
            "Vulture": { detail: "Though they prefer deserts, vultures will inhabit grasslands near a water source."},
            "Penguin": { detail: "Penguins live up to 80% of their live sin the ocean."},
            "Albatross": { detail: "Albatross only come to land to breed."},
            "Flamingo": {detail: "A variety of habitats are used by flamingos: mangrove swamps, tidal flats, and sandy islands in the intertidal zone."},
            "Swan": { detail: "Swans typically live near bodies of water."},
            "Goose": { detail: "Geese typically live near bodies of water."},
            "Pelican": { detail: "Pelican prefer to livee and hunt in inland and coastal bodies of water."},
            "Heron": { detail: "Herons are essentially nonswimming waterbirds that feed on the margins of lakes, rivers, swamps, ponds, and the sea."},
            "Hawk": { detail: "Hawks can thrive living near bodies of water and hunting fish."}
        }
    }
}

export default Birds;