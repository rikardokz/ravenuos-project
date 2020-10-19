/* Client ID
zXlgTdxo2LPabmlzb7KdTw

API Key
7RjKR_ODS5Hl1_p5aG5WTfHvk58z1a0wdOxm5PouhHzs20-77BWmysrvBAmc1v-65K8hhPQY8zXKk5EXWD9bt1J2WMuE8JJeN5WsA1v8DxhXBezXy1STMy3f5ryEccW8 */

const apiKey = "7RjKR_ODS5Hl1_p5aG5WTfHvk58z1a0wdOxm5PouhHzs20-77BWmysrvBAmc1v-65K8hhPQY8zXKk5EXWD9bt1J2WMuE8JJeN5WsA1v8DxhXBezXy1STMy3ryEccW8";

const yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: { Authorization: `Bearer ${apiKey}`}
        }).then(response => { 
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.business) {
                return jsonResponse.business.map(business => {
                      return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories,
                        rating: business.rating,
                        reviewCount: business.review_count,
                      }  
                })
            } else {
                throw new Error('Business does not exist')
            }
        })
    }
}

export default yelp;