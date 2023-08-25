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

func OfferTx(walletUrl string) string {
	jsonBody := fmt.Sprintln(`{
	"jsonrpc": "2.0",
	"id": "0",
	"method": "marketplace_push_offer",
	"params": {
		"od": {
			"ap": "1000",
			"at": "1",
			"cat": "CLS:MAN:TSH",
			"cnt": "https://zanobazaar.com",
			"com": "This field is where you write a detailed overview of your product or service, make it good",
			"do": "ZxDNaMeZjwCjnHuU5gUNyrP1pM3U5vckbakzzV6dEHyDYeCpW8XGLBFTshcaY8LkG9RQn7FsQx8w2JeJzJwPwuDm2NfixPAXf",
			"et": 10,
			"fee": 10000000000,
			"lci": "THE ZANOVERSE",
			"lco": "Decentralized",
			"ot": 3,
			"pt": "$ZANO",
			"t": "Product Title",
			"url": "QmVWxCy7JyEuvxMPpcQ4jBzsRxtMFjbF6VGMc4CGuN6iqK"
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
	data := Tx{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.TxHash
}

func PushOffer(walletUrl string) string {
	txid := OfferTx(walletUrl)
	return txid
}
