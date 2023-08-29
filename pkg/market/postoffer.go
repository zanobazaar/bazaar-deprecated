package market

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type TxOffer struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		TxBlobSize int    `json:"tx_blob_size"`
		TxHash     string `json:"tx_hash"`
	} `json:"result"`
}

func CreateOfferTx(walletUrl string, title string, amount string, category string, comments string, conditions string, locationCity string, paymentType string) string {
	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_push_offer",
	"params": {
		"od": {
			"ap": "%s",
			"at": "",
			"b":"",
			"cat": "%s",
			"cnt": "%s",
			"com": "%s",
			"do": "",
			"et": 1,
			"fee": 10000000000,
			"lci": "%s",
			"lco": "",
			"ot": 3,
			"pt": "%s",
			"t": "%s",
			"url": ""
		}
	}
}`, amount, category, conditions, comments, locationCity, paymentType, title)

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
	data := TxOffer{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func CreateOffer(walletUrl string, title string, amount string, category string, comments string, conditions string, locationCity string, paymentType string) string {

	txId := CreateOfferTx(walletUrl, title, amount, category, comments, conditions, locationCity, paymentType)
	return txId
}
