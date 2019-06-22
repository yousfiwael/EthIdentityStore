const EthIdentityStore = artifacts.require("EthIdentityStore");
const BigNumber = require('bignumber.js');

contract("EthIdentityStore", accounts => {
	const [firstAccount, secondAccount] = accounts;

	let ethidentitystore

	beforeEach('setup contract for each test', async function () {
		ethidentitystore = await EthIdentityStore.new()
	})

	it("sets an owner", async () => {
        //ensures the owner is correctly set
        assert.equal(await ethidentitystore.owner.call(), firstAccount);
	});

	it("not paused", async () => {
        //makes sure the contract isnt paused on creation
        assert.equal(await ethidentitystore.paused.call(), false);
	});

	it("is pausable by owner", async () => {
        //ensures owner can pause
        await ethidentitystore.pause({ from: firstAccount });
        assert.equal(await ethidentitystore.paused.call(), true);
	});

	it("is unpausable by owner", async () => {
        //ensures owner can unpause
        await ethidentitystore.pause({ from: firstAccount });
        assert.equal(await ethidentitystore.paused.call(), true);
        await ethidentitystore.unpause({ from: firstAccount });
        assert.equal(await ethidentitystore.paused.call(), false);
	});

	it("is only pausable by owner", async () => {
    //ensures only owner can pause
        try {
        	await ethidentitystore.pause({ from: secondAccount });
        	assert.fail();
        } catch (err) {
        	assert.ok(/revert/.test(err.message));
        }
	});


	it("is able to enroll", async () => {
        //ensures User can enroll himself
        assert.equal(await ethidentitystore.enroll.call("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount }), true);
	});


	it("is able to get his IdentityStore Info", async () => {
        //ensures User can enroll himself
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount })
        identitystore = await ethidentitystore.myIdentityStore.call({ from: firstAccount });
        identitystore[0] = identitystore[0].toNumber();
        assert.equal(identitystore[0], 1);
        assert.equal(identitystore[1], "Wael");
        assert.equal(identitystore[2], "Yousfi");
        assert.equal(identitystore[3], "10/17/2002");
        assert.equal(identitystore[4], "Tunisian");
        assert.equal(identitystore[5], "Tunisia");
	});


    it("is able to get his id Info", async () => {
        //ensures User can enroll himself
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount })
        id = await ethidentitystore.myID.call({ from: firstAccount });
        id[0] = id[0].toNumber();
        assert.equal(id[0], 1);
        assert.equal(id[1], "Wael");
        assert.equal(id[2], "Yousfi");
        assert.equal(id[3], "Tunisian");
    });

	it("isn't able to get his ID Info without enrolling first", async () => {
        try {
        	await ethidentitystore.myID({ from: firstAccount });
        	assert.fail();
        } catch (err) {
        	assert.ok(/revert/.test(err.message));
        }

	});

    it("is  able to update his Info", async () => {
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount })
        assert.equal(await ethidentitystore.update.call("Wael", "Yousfi", "10/17/2002","American","America",{ from: firstAccount }), true);
    });

    it("Is Able to authnticate himself", async () => {
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount })
        assert.equal(await ethidentitystore.auth.call(1, "Wael", "Yousfi",{ from: firstAccount }), true);
    });

    it("Isn't Able to authnticate someone else", async () => {
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: firstAccount })
        await ethidentitystore.enroll("Wael", "Yousfi","10/17/2002","Tunisian","Tunisia",{ from: secondAccount })
        try {
            assert.equal(await ethidentitystore.auth.call(1, "Wael", "Yousfi",{ from: secondAccount }), true);
            assert.fail();
        } catch (err) {
            assert.ok(/revert/.test(err.message));
        }
    });


});