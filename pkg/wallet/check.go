package wallet

import (
	"bytes"
	"encoding/json"
	"fmt"
	"io"
	"net/http"
	"strings"
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

type AliasCheck struct {
	Id      int    `json:"id"`
	Jsonrpc string `json:"jsonrpc"`
	Result  struct {
		AliasDetails struct {
			Address     string `json:"address"`
			Comment     string `json:"comment"`
			TrackingKey string `json:"tracking_key"`
		} `json:"alias_details"`
		Status string `json:"status"`
	} `json:"result"`
}

func AliasMatch(aliasTrim string, daemonUrl string, walletAddress string) bool {

	jsonBody := fmt.Sprintf(`{
	"jsonrpc": "2.0",
	"id": 0,
	"method": "get_alias_details",
	"params": {
		"alias": "%s"
	}
}`, aliasTrim)

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
	data := AliasCheck{}

	_ = json.Unmarshal([]byte(body), &data)

	if walletAddress == data.Result.AliasDetails.Address {
		return true
	}

	return false
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

func CheckZanoServices(walletUrl string, daemonUrl string, alias string) (bool, bool) {

	aliasTrim := strings.TrimSpace(alias)

	var connected bool
	var aliasMatches bool

	// TODO - handle error correctly
	walletAddress := GetWalletInfo(walletUrl)
	if walletAddress != "" {
		connected = true
	} else {
		connected = false
	}

	if aliasTrim != "" {
		aliasMatch := AliasMatch(aliasTrim, daemonUrl, walletAddress)
		if aliasMatch {
			aliasMatches = true
		}
	} else {
		aliasMatches = false
	}

	return connected, aliasMatches
}
