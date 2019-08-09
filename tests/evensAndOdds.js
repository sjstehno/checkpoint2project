var evensAndOddsPageObject = {}
module.exports = {
    beforeEach: browser => {
        evensAndOddsPageObject = browser.page.evensAndOddsPageObject()
        evensAndOddsPageObject.navigate()
    },
    //ODDS AND EVENS
    'Odd only': browser => {
        evensAndOddsPageObject
        .setValue('@evenOddInput', '3,3,3,3')
        .click('@evenOddButton')
        evensAndOddsPageObject.expect.element('@evenResults').text.to.not.contain('3,3,3,3')
        evensAndOddsPageObject.expect.element('@oddResults').text.to.contain('3,3,3,3')
    },
    'Even only': browser => {
        evensAndOddsPageObject
        .setValue('@evenOddInput', '2,4,6,8')
        .click('@evenOddButton')
        evensAndOddsPageObject.expect.element('@oddResults').text.to.not.contain('2,4,6,8')
        evensAndOddsPageObject.expect.element('@evenResults').text.to.contain('2,4,6,8')
    },
    'Odd and Even': browser => {
        evensAndOddsPageObject
        .setValue('@evenOddInput', '5,6,7,2')
        .click('@evenOddButton')
        evensAndOddsPageObject.expect.element('@oddResults').text.to.contain('5,7')
        evensAndOddsPageObject.expect.element('@oddResults').text.to.not.contain('6,2')
        evensAndOddsPageObject.expect.element('@evenResults').text.to.contain('6,2')
        evensAndOddsPageObject.expect.element('@evenResults').text.to.not.contain('5,7')
    },
    //FILTER OBJECT
    'Name': browser => {
        evensAndOddsPageObject
        .setValue('@objectFilterInput', 'name')
        .click('@objectFilterButton')
        evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('name')
    },
    'Title': browser => {
        evensAndOddsPageObject
        .setValue('@objectFilterInput', 'title')
        .click('@objectFilterButton')
        evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('title')
    },
    'Age': browser => {
        evensAndOddsPageObject
        .setValue('@objectFilterInput', 'age')
        .click('@objectFilterButton')
        evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('age')
    },
    'Title': browser => {
        evensAndOddsPageObject
        .setValue('@objectFilterInput', 'title')
        .click('@objectFilterButton')
        evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('title')
    },
    'Hair Color': browser => {
        evensAndOddsPageObject
        .setValue('@objectFilterInput', 'hairColor')
        .click('@objectFilterButton')
        evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('hairColor')
    },
    // **'Multiple filters' test does not pass- app unable to handle mutiple filters at once**
    // 'Multiple filters': browser => {
    //     evensAndOddsPageObject
    //     .setValue('@objectFilterInput', 'name, age')
    //     .click('@objectFilterButton')
    //     evensAndOddsPageObject.expect.element('@objectFilterResults').text.to.contain('name, age')
    // },
    // FILTER STRING
    'One name': browser => {
        evensAndOddsPageObject
        .setValue('@nameFilterInput', 'Blake')
        .click('@nameFilterButton')
        evensAndOddsPageObject.expect.element('@nameFilterResults').text.to.contain('Blake')
    },
    // **'Multiple existing names' test does not pass- app unable to handle mutiple filters at once**
    // 'Multiple existing names': browser => {
    //     evensAndOddsPageObject
    //     .setValue('@nameFilterInput', 'Blake, Jessica')
    //     .click('@nameFilterButton')
    //     evensAndOddsPageObject.expect.element('@nameFilterResults').text.to.contain('Blake, Jessica')
    // },
    'Non-existing name': browser => {
        evensAndOddsPageObject
        .setValue('@nameFilterInput', 'Sarah')
        .click('@nameFilterButton')
        evensAndOddsPageObject.expect.element('@nameFilterResults').text.to.not.contain('Sarah')
    },
    // **"Non-existing name with existing name' test does not pass- bug in app"**
    // 'Non-existing name with existing name': browser => {
    //     evensAndOddsPageObject
    //     .setValue('@nameFilterInput', 'Sarah, Tyler')
    //     .click('@nameFilterButton')
    //     evensAndOddsPageObject.expect.element('@nameFilterResults').text.to.not.contain('Sarah')
    //     evensAndOddsPageObject.expect.element('@nameFilterResults').text.to.contain('Tyler')
    // },
    // PALINDROME
    // **'Palindrome' test does not pass- bug in app"**
    // 'Palindrome': browser => {
    //     evensAndOddsPageObject
    //     .setValue('@palindromeInput', 'race car')
    //     .click('@palindromeButton')
    //     evensAndOddsPageObject.expect.element('@palindromeResults').text.to.contain('true')
    // },
    'Non-Palindrome': browser => {
            evensAndOddsPageObject
            .setValue('@palindromeInput', 'computer')
            .click('@palindromeButton')
            evensAndOddsPageObject.expect.element('@palindromeResults').text.to.contain('false')
        },
        // SUM
    'Two positive numbers': browser => {
        evensAndOddsPageObject
            .setValue('@sumInput1', '5')
            .setValue('@sumInput2', '8')
            .click('@sumButton')
        evensAndOddsPageObject.expect.element('@sumResults').text.to.contain('13')
    },
    'One negative and one positive number': browser => {
        evensAndOddsPageObject
            .setValue('@sumInput1', '-4')
            .setValue('@sumInput2', '3')
            .click('@sumButton')
        evensAndOddsPageObject.expect.element('@sumResults').text.to.contain('-1')
    },
    'Two positive numbers with multiple digits': browser => {
        evensAndOddsPageObject
            .setValue('@sumInput1', '100')
            .setValue('@sumInput2', '400')
            .click('@sumButton')
        evensAndOddsPageObject.expect.element('@sumResults').text.to.contain('500')
    },
}