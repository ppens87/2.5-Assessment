module.exports = {
    beforeEach: function(browser){
        browser.url('http://localhost:3000')
    },
    after: function(browser){
        browser.end()
    },
    'Evens and Odds': function(browser){
        browser
            .setValue('input[name="evenOddInput"]', '4,5,1,2,3,56')
            .click('button[name="evenOddButton"]')
            .expect.element('span[name="evenResults"]').text.to.contain("4,2,56")

        browser
            .expect.element('span[name="oddResults"]').text.to.contain("5,1,3")
    },
    'Filter Object': function(browser){
        browser
            .setValue('input[name="objectFilterInput"]',  'Favorite State')
            .click('button[name="objectFilterButton"]')
            .expect.element('span[name="objectFilterResults"]').text.to.contain("[]")
    },
    'Filter String': function(browser){
        browser
            .setValue('input[id="nameFilterInput"]',  'Blake')
            .click('button[id="nameFilterButton"]')
            .expect.element('span[name="nameFilterResults"]').text.to.contain("Filtered Names:", "Blake")
    },
    'Palindrome': function(browser){
        browser
            .setValue('input[name="palindromeInput"]',  '7532')
            .click('button[name="palindromeButton"]')
            .expect.element('span[name="palindromeResults"]').text.to.contain("Palindrome:", "False")
    },
    'Sum': function(browser){
        browser
        .setValue('input[name="sumInput1"]',  '465')
        .setValue('input[name="sumInput2"]',  '123')
        .click('button[name="sumButton"]')
        .expect.element('span[name="sumResults"]').text.to.contain("588")
    }

    



    

} 

