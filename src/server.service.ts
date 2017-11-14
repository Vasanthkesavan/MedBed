import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable()

export class ServerService {
  constructor(private http: HttpClient) {}

  getAllPatients() {
    return this.http.get('/api/getAllPatients');
  }

  toggleUrls(count: Number, url: String) {
    return this.http.post('api/toggleUrls', [count, url]);
  }

  getAllEncounters(patientId: String) {
    return this.http.post('/api/getAllEncounters', [patientId]);
  }

  getAllCarePlan(patientId: String) {
    return this.http.post('/api/getAllCarePlan', [patientId]);
  }

  getAllCommunicationPlan(patientId: String) {
    return this.http.post('/api/getAllCommunicationPlan', [patientId]);
  }

  getAllTheConditions(patientId: String) {
    return this.http.post('/api/getAllTheConditions', [patientId]);
  }

  getAllTheDiagnosticConditions(patientId: String) {
    return this.http.post('/api/getAllTheDiagnosticConditions', [patientId]);
  }

  getAllTheImmunization(patientId: String) {
    return this.http.post('/api/getAllTheImmunization', [patientId]);
  }

  getAllTheObservations(patientId: String) {
    return this.http.post('/api/getAllTheObservations', [patientId]);
  }

  getAllTheMAdmin(patientId: String) {
    return this.http.post('/api/getAllTheMAdmin', [patientId]);
  }

  getAllTheMDispense(patientId: String) {
    return this.http.post('/api/getAllTheMDispense', [patientId]);
  }

  getAllTheMRequest(patientId: String) {
    return this.http.post('/api/getAllTheMRequest', [patientId]);
  }

  getAllTheProcedures(patientId: String) {
    return this.http.post('/api/getAllTheProcedures', [patientId]);
  }

  getTheAudioFile(author: String, organization: String) {
    return this.http.post('/api/getTheAudioFile', [author, organization])
  }
}

