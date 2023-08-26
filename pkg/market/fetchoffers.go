package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

func GetOffersGlobalTx(daemonUrl string) Offers {
	jsonBody := fmt.Sprintln(`{
		"jsonrpc": "2.0",
		"id": "0",
		"method": "marketplace_global_get_offers_ex",
		"params": {
			"filter": {
				"amount_low_limit": 0,
				"amount_up_limit": 0,
				"bonus": false,
				"category": "",
				"fake": false,
				"keyword": "",
				"limit": 100,
				"location_city": "",
				"location_country": "",
				"offer_type_mask": 0,
				"offset": 0,
				"order_by": 0,
				"primary": "",
				"rate_low_limit": "0.000000",
				"rate_up_limit": "0.000000",
				"reverse": false,
				"target": "",
				"timestamp_start": 0,
				"timestamp_stop": 0
			}
		}
	}`)

	request, err := http.NewRequest("POST", daemonUrl, bytes.NewBuffer([]byte(jsonBody)))
	if err != nil {
		fmt.Println("error") // return meaningful statement
	}
	request.Header.Set("Content-Type", "application/json; charset=UTF-8")

	client := &http.Client{}
	res, err := client.Do(request)
	if err != nil {
		fmt.Println("error") // return meaningful statement
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			fmt.Println("error")
		}
	}(res.Body)

	body, _ := io.ReadAll(res.Body)
	data := Offers{}

	_ = json.Unmarshal([]byte(body), &data)

	return data
}

func GetAllOffers(daemonUrl string) Offers {
	offers := GetOffersGlobalTx(daemonUrl)
	return offers
}
