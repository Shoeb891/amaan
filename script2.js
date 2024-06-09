document.getElementById('budget-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const functionType = document.getElementById('function-type').value;
    const attendees = parseInt(document.getElementById('attendees').value);
    const duration = parseInt(document.getElementById('duration').value);
    const location = document.getElementById('location').value;
    const services = Array.from(document.querySelectorAll('input[name="services"]:checked')).map(el => el.value);
    const budgetRange = document.getElementById('budget-range').value;

    const planDetails = document.getElementById('plan-details');
    planDetails.style.display = 'block';

    let plans = '';

    // Function to generate a plan based on inputs
    function generatePlan(functionType, attendees, duration, location, services, budget) {
        let plan = '<h3>Expected Plan for ' + functionType + ' in ' + budget + ' budget</h3>';
        plan += '<p>Number of Attendees: ' + attendees + '</p>';
        plan += '<p>Duration: ' + duration + ' hours</p>';
        plan += '<p>Location: ' + location + '</p>';
        plan += '<ul>';
        services.forEach(service => {
            plan += '<li>' + service + '</li>';
        });
        plan += '</ul>';
        plan += '<p>Based on your budget and preferences, we recommend the following services:</p>';
        plan += '<ul>';

        if (functionType === 'birthday') {
            if (budget === '10000-50000') {
                plan += '<li>Basic venue selection, consider a community center or park.</li>';
                plan += '<li>Simple invitation cards, consider digital invites to save costs.</li>';
                if (services.includes('entertainment')) plan += '<li>Basic entertainment, like a small magic show or DIY games.</li>';
                if (services.includes('food')) plan += '<li>Snacks and drinks, possibly homemade or from a local bakery.</li>';
            } else if (budget === '50000-100000') {
                plan += '<li>Good venue selection, such as a local event hall.</li>';
                plan += '<li>Printed invitation cards with custom designs.</li>';
                if (services.includes('entertainment')) plan += '<li>Live entertainment, such as a band or professional DJ.</li>';
                if (services.includes('food')) plan += '<li>Catered food and drinks from a reputable local caterer.</li>';
            } else if (budget === '100000-500000') {
                plan += '<li>Premium venue selection, like a hotel ballroom or upscale restaurant.</li>';
                plan += '<li>Customized invitation cards with unique designs and quality paper.</li>';
                if (services.includes('entertainment')) plan += '<li>Professional entertainment, such as a live band or entertainers.</li>';
                if (services.includes('food')) plan += '<li>Gourmet food and drinks, potentially a multi-course meal.</li>';
                if (services.includes('photography')) plan += '<li>Professional photography to capture high-quality memories.</li>';
            } else if (budget === '500000-1000000') {
                plan += '<li>Luxury venue selection, possibly a luxury hotel or exclusive venue.</li>';
                plan += '<li>Exclusive invitation cards with personalized touches.</li>';
                if (services.includes('entertainment')) plan += '<li>Celebrity entertainment or high-end performers.</li>';
                if (services.includes('food')) plan += '<li>Exclusive gourmet food and drinks with a personalized menu.</li>';
                if (services.includes('photography')) plan += '<li>High-end photography and videography for lasting memories.</li>';
                if (services.includes('decoration')) plan += '<li>Luxury decoration with themed decor and high-quality materials.</li>';
            }
        } else if (functionType === 'wedding') {
            if (budget === '10000-50000') {
                plan += '<li>Basic venue selection, such as a community hall or a modest outdoor space.</li>';
                plan += '<li>Simple wedding invitation cards, possibly digital invites.</li>';
                if (services.includes('food')) plan += '<li>Simple catering, such as a buffet or family-style meal.</li>';
            } else if (budget === '50000-100000') {
                plan += '<li>Good venue selection, such as a charming event space or garden.</li>';
                plan += '<li>Printed wedding invitation cards with elegant designs.</li>';
                if (services.includes('food')) plan += '<li>Standard catering with multiple menu options.</li>';
                if (services.includes('photography')) plan += '<li>Standard photography package to capture important moments.</li>';
            } else if (budget === '100000-500000') {
                plan += '<li>Premium venue selection, such as a historic venue or high-end hotel.</li>';
                plan += '<li>Customized wedding invitation cards with unique designs.</li>';
                if (services.includes('food')) plan += '<li>Premium catering with gourmet options and drink packages.</li>';
                if (services.includes('photography')) plan += '<li>Professional photography and videography for comprehensive coverage.</li>';
                if (services.includes('decoration')) plan += '<li>Elegant decoration with a cohesive theme and high-quality materials.</li>';
            } else if (budget === '500000-1000000') {
                plan += '<li>Luxury venue selection, such as a luxury hotel or exclusive resort.</li>';
                plan += '<li>Exclusive wedding invitation cards with personalized touches.</li>';
                if (services.includes('food')) plan += '<li>Gourmet catering with a personalized menu and drink pairings.</li>';
                if (services.includes('photography')) plan += '<li>High-end photography and videography with a custom album and video.</li>';
                if (services.includes('decoration')) plan += '<li>Luxury decoration with bespoke decor and premium materials.</li>';
                if (services.includes('entertainment')) plan += '<li>Live entertainment, such as a well-known band or artist.</li>';
            }
        } else if (functionType === 'get-together') {
            if (budget === '10000-50000') {
                plan += '<li>Basic venue selection, such as a park or community center.</li>';
                if (services.includes('food')) plan += '<li>Snacks and drinks, potentially homemade or from a local shop.</li>';
            } else if (budget === '50000-100000') {
                plan += '<li>Good venue selection, such as a local event space.</li>';
                if (services.includes('food')) plan += '<li>Standard catering with a variety of options.</li>';
                if (services.includes('entertainment')) plan += '<li>Live entertainment, such as a local band or DJ.</li>';
            } else if (budget === '100000-500000') {
                plan += '<li>Premium venue selection, such as a well-known venue or restaurant.</li>';
                if (services.includes('food')) plan += '<li>Premium catering with high-quality food and drink options.</li>';
                if (services.includes('entertainment')) plan += '<li>Professional entertainment, such as a renowned performer.</li>';
                if (services.includes('photography')) plan += '<li>Professional photography to capture the event.</li>';
            } else if (budget === '500000-1000000') {
                plan += '<li>Luxury venue selection, such as an exclusive club or high-end resort.</li>';
                if (services.includes('food')) plan += '<li>Exclusive catering with gourmet food and bespoke drink options.</li>';
                if (services.includes('entertainment')) plan += '<li>Celebrity entertainment or high-profile performers.</li>';
                if (services.includes('photography')) plan += '<li>High-end photography and videography to capture the event.</li>';
                if (services.includes('decoration')) plan += '<li>Luxury decoration with custom themes and premium materials.</li>';
            }
        }

        plan += '</ul>';

        // Additional recommendations
        plan += '<h4>Additional Recommendations:</h4>';
        plan += '<ul>';
        plan += '<li>Consider booking early to get the best venues and services.</li>';
        plan += '<li>Always have a backup plan for outdoor events in case of bad weather.</li>';
        plan += '<li>Think about transportation and accommodation for out-of-town guests.</li>';
        plan += '<li>Work with a professional event planner if your budget allows it.</li>';
        plan += '</ul>';

        return plan;
    }

    plans = generatePlan(functionType, attendees, duration, location, services, budgetRange);
    planDetails.innerHTML = plans;
});
