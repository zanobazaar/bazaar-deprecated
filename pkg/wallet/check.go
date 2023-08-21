package wallet

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
)

type Info struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		Address              string `json:"address"`
		CurrentHeight        int    `json:"current_height"`
		IsWhatchOnly         bool   `json:"is_whatch_only"`
		Path                 string `json:"path"`
		TransferEntriesCount int    `json:"transfer_entries_count"`
		TransfersCount       int    `json:"transfers_count"`
	} `json:"result"`
}

type Alias struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		AliasInfo struct {
			Address     string `json:"address"`
			Alias       string `json:"alias"`
			Comment     string `json:"comment"`
			TrackingKey string `json:"tracking_key"`
		} `json:"alias_info"`
		Status string `json:"status"`
	} `json:"result"`
}

func GetWalletAlias(walletUrl string) string {
	jsonBody := fmt.Sprintln(`{
		"jsonrpc": "2.0",
		"id": 0,
		"method": "get_alias_details",
		"params": {
			"alias": "kekzploit"
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
	data := Info{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.Address
}

func GetWalletInfo(walletUrl string) string {

	jsonBody := fmt.Sprintln(`{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_wallet_info"
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
	data := Info{}

	_ = json.Unmarshal([]byte(body), &data)

	return data.Result.Address
}

func CheckZanoServices(walletUrl string, daemonUrl string) (string, string) {

	walletAddress := GetWalletInfo(walletUrl)
	fmt.Println(walletAddress)

	walletAlias := GetWalletAlias(walletUrl)
	fmt.Println(walletAlias)

	return walletAddress, walletAlias
}
