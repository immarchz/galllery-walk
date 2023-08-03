import Image from "next/image";
import Link from "next/link";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export default function createForm() {
  return (
    <div className="flex min-h-screen bg-cover bg-black text-white">
      <div className="flex w-full justify-center px-10">
        <div className="flex flex-col w-full items-center text-white">
          <div className="flex flex-col w-2/3 text-2xl">
            <h1 className="mt-5">About Project</h1>
          </div>

          <div className="w-full flex justify-center mt-5">
            <Box
              sx={{
                display: "flex",
                p: 2,
                border: "1px solid white",
                width: 584,
                height: 248,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Button className="text-white ">Add a picture</Button>
            </Box>
          </div>
          <div className="flex flex-col w-2/3 text-2xl">
            <h1 className="mt-5">Project Name</h1>
            <div className="flex mt-5">
              <Box
                component="form"
                sx={{
                  width: 1110,
                  height: 60,
                  border: "1px solid white",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
                autoComplete="off"
              >
                <TextField
                  className="flex-grow"
                  InputProps={{
                    sx: {
                      width: 1000,
                      color: "white",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                /> 
                <Button 
                className="mr-4 text-black bg-white w-32 hover:bg-white"
                sx={{
                    borderRadius:3
                }}
                >
                Edit
                </Button>
              </Box>
            </div>

            <h1 className="mt-5">Project Detail</h1>
            <div className="flex mt-5">
              <Box
                component="form"
                sx={{
                  width: 1110,
                  height: 106,
                  border: "1px solid white",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
                autoComplete="off"
              >
                <TextField
                  className="flex-grow"
                  InputProps={{
                    sx: {
                      width: 1000,
                      color: "white",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                /> 
                <Button 
                className="mr-4 text-black bg-white w-32 hover:bg-white"
                sx={{
                    borderRadius:3
                }}
                >Edit
                </Button>
              </Box>
            </div>

            <h1 className="mt-5">Members</h1>
            <div className="flex mt-5">
              <Box
                component="form"
                sx={{
                  width: 1110,
                  height: 106,
                  border: "1px solid white",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
                autoComplete="off"
              >
                <TextField
                  className="flex-grow"
                  InputProps={{
                    sx: {
                      width: 1000,
                      color: "white",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                /> 
                <Button 
                className="mr-4 text-black bg-white w-32 hover:bg-white"
                sx={{
                    borderRadius:3
                }}
                >
                Edit
                </Button>
              </Box>
            </div>

            <h1 className="mt-5">Presentation File(s)</h1>
            <div className="flex mt-5">
              <Box
                component="form"
                sx={{
                  width: 1110,
                  height: 106,
                  border: "1px solid white",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
                autoComplete="off"
              >
                
                <TextField
                disabled
                  className="flex-grow"
                  defaultValue="No Files Uploaded"
                  InputProps={{
                    sx: {
                    
                      width: 1000,
                      color: "white",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                /> 
                <Button 
                className="mr-4 text-black bg-white w-32 hover:bg-white"
                sx={{
                    borderRadius:3
                }}
                >
                Upload
                </Button>
              </Box>
            </div>

            <h1 className="mt-5">Media(s)</h1>
            <div className="flex mt-5">
              <Box
                component="form"
                sx={{
                  width: 1110,
                  height: 106,
                  border: "1px solid white",
                  borderRadius: 5,
                  display: "flex",
                  alignItems: "center",
                }}
                autoComplete="off"
              >
                
                <TextField
                  className="flex-grow"
                  defaultValue="https://www.youtube.com/watch?v=vyqcKf0ilNY"
                  InputProps={{
                    sx: {
                    
                      width: 1000,
                      color: "white",
                      "& fieldset": {
                        border: "none",
                      },
                    },
                  }}
                /> 
                <Button 
                className="mr-4 text-black bg-white w-32 hover:bg-white"
                sx={{
                    borderRadius:3
                }}
                >
                Upload
                </Button>
              </Box>
            </div>
            
            

          </div>
          <Button className="my-12 text-black bg-white w-32 hover:bg-white"
          sx={{
            borderRadius:3
        }}
          > 
          Save 
          </Button>
        </div>
        
      </div>
    </div>
  );
}
