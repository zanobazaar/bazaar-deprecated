package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Tx struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		TxBlobSize int    `json:"tx_blob_size"`
		TxHash     string `json:"tx_hash"`
	} `json:"result"`
}

func OfferTx(walletUrl string, title string, comments string, conditions string, category string, paymentType string, locationCountry string, locationCity string, url string) string {
	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_push_offer",
	"params": {
		"od": {
			"ap": "",
			"at": "",
			"cat": "%s",
			"cnt": "%s",
			"com": "%s",
			"do": "",
			"et": 2,
			"fee": 10000000000,
			"lci": "%s",
			"lco": "%s",
			"ot": 3,
			"pt": "%s",
			"t": "%s",
			"url": "%s"
		}
	}
}`, category, conditions, comments, locationCity, locationCountry, paymentType, title, url)

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
	data := Tx{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func PushOffer(walletUrl string, title string, conditions string, comments string, category string, paymentType string, locationCountry string, locationCity string, url string) string {
	txid := OfferTx(walletUrl, title, conditions, comments, category, paymentType, locationCountry, locationCity, url)
	return txid
}
