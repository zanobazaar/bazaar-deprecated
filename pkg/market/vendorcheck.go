package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Offers struct {
	Id      string `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		Offers []struct {
			Ap             string `json:"ap"`
			At             string `json:"at"`
			B              string `json:"b"`
			Cat            string `json:"cat"`
			Cnt            string `json:"cnt"`
			Com            string `json:"com"`
			Do             string `json:"do"`
			Et             int    `json:"et"`
			Fee            int64  `json:"fee"`
			IndexInTx      int    `json:"index_in_tx"`
			Lci            string `json:"lci"`
			Lco            string `json:"lco"`
			Ot             int    `json:"ot"`
			P              string `json:"p"`
			Pt             string `json:"pt"`
			Security       string `json:"security"`
			T              string `json:"t"`
			Timestamp      int    `json:"timestamp"`
			TxHash         string `json:"tx_hash"`
			TxOriginalHash string `json:"tx_original_hash"`
			Url            string `json:"url"`
		} `json:"offers"`
		Status      string `json:"status"`
		TotalOffers int    `json:"total_offers"`
	} `json:"result"`
}

func BazaarCheck(alias string, walletUrl string) bool {
	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_get_offers_ex",
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

	request, err := http.NewRequest("POST", walletUrl, bytes.NewBuffer([]byte(jsonBody)))
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

	currentVendor := fmt.Sprintf("vendor:%s", alias)

	for _, offer := range data.Result.Offers {
		if currentVendor == offer.Cnt {
			return true
		}
	}

	return false
}

func VendorCheck(alias string, walletUrl string) bool {
	bazaarExists := BazaarCheck(alias, walletUrl)
	return bazaarExists
}
