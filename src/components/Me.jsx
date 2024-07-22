const Me = () => {

    const me = {
        name: 'JH',
        age: 30,
        job: 'Weapon'
    }


    return (
        <>
            <p>My name is {me.name}</p>
            <p>I am {me.age} years old</p>
            <p>And I am a {me.job}</p>
        </>
    )

}

export default Me;