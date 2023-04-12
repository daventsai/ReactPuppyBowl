const cohortName = '2301-FTB-ET-WEB-AM';
const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}/`;

export const fetchAllPlayers = async () => {
    try {
        const response = await fetch(`${APIURL}players`);
        const result = await response.json();
        if (result.error){
            throw result.error;
        }
        return result.data.players;
    } catch (error) {
        console.log("Error fetching good boys", error);
    }
};

export const fetchSinglePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`);
        const result = await response.json();
        console.log(result.data.player);
        return result.data.player;
    } catch (error) {
        console.log("Error fetching the good boy", error);
    }
};

export const addNewPlayer = async (playerObj) => {
    try {
        const response = await fetch(`${APIURL}players`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: playerObj.name,
                breed: playerObj.breed,
            }),
        });
        const result = await response.json();
    } catch (error) {
        console.log("Error adding a good boy", error);
    }
};

export const removePlayer = async (playerId) => {
    try {
        const response = await fetch(`${APIURL}players/${playerId}`,{
            method: 'DELETE',
        });
    } catch (error) {
        console.log("Error removing a good boy", error);
    }
};
