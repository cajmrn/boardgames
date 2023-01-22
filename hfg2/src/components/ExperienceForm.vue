<template>
    <v-form>
        <v-row>
            <v-col cols="12" md="3">
                This will be an image
            </v-col>
            <v-col cols="12" md="9">
                <v-text-field
                    label="Event Title"
                    density="compact"
                ></v-text-field>
                <v-text-field
                    label="Game"
                    density="compact"
                ></v-text-field>
                <v-text-field
                    label="Experience Summary"
                    density="compact"
                ></v-text-field>
                <v-text-field
                    label="Score"
                    density="compact"
                ></v-text-field>
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Rating"
                            :max="10"
                            step="1"
                            hide-details
                        ></v-slider>
                    </v-col>
                    <v-col cols="2">
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="10">
                        <v-slider
                            label="Weight"
                            :max="10"
                            step="1"
                            hide-details
                        ></v-slider> 
                    </v-col>
                    <v-col cols="2">    
                        <v-text-field 
                            density="compact" 
                            hide-details 
                            variant="outlined"
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-checkbox
                label="Is Winner"
                ></v-checkbox>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    label="Corrections"
                    density="compact"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-textarea 
                    density="compact"
                    label="Strategy"
                ></v-textarea>
            </v-col>
        </v-row>
        <v-row align="center">
            <v-col cols="12" md="10">
                <v-file-input 
                    label="File Upload"
                    density="compact"
                ></v-file-input>
            </v-col>
            <v-col cols="12" md="2">
                <v-btn>Submit</v-btn>
            </v-col>
        </v-row>

    </v-form>
</template>