interface ApiResponse<T>{
message : string,
status : STATUS_CODE,
res : T
}

enum STATUS_CODE {
    SUCCESS = 1,
    FAILED = 0
}